package main

import (
	"bytes"
	"context"
	"errors"
	"testing"
	"time"

	"github.com/jimeh/go-golden"
	"github.com/krystal/guvnor"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func Test_newStatusCmd(t *testing.T) {
	tests := []struct {
		name      string
		args      []string
		wantArgs  *guvnor.StatusArgs
		engineRes *guvnor.StatusRes
		engineErr error
		wantErr   string
	}{
		{
			name: "success",
			args: []string{"fizzler"},
			wantArgs: &guvnor.StatusArgs{
				ServiceName: "fizzler",
			},
			engineRes: &guvnor.StatusRes{
				DeploymentID:   100,
				LastDeployedAt: time.Date(2000, 11, 2, 12, 0, 0, 0, time.UTC),
				Processes: map[string]guvnor.ProcessStatus{
					"fizz": {
						WantReplicas: 1,
						Containers: []guvnor.ProcessContainer{
							{
								ContainerName: "a-name-1",
								ContainerID:   "9a41bb9395f6eb342fdb1a2145560d91fdbf18d40691bcce93a9e6edaaedc1f8",
								Status:        "running",
							},
						},
					},
					"buzz": {
						WantReplicas: 2,
						Containers: []guvnor.ProcessContainer{
							{
								ContainerName: "b-name-1",
								ContainerID:   "8a5f8765250e01ec549a098a6438f3880a19f61e41d48586e73f269d98ceadf3",
								Status:        "running",
							},
							{
								ContainerName: "b-name-2",
								ContainerID:   "8315d2b0cf0b8a7a8c1675d0ec1062b7b9d041b7381779e842b7dc157b8eea64",
								Status:        "dead",
							},
						},
					},
				},
			},
		},
		{
			name:      "error",
			args:      []string{"barg"},
			engineErr: errors.New("rats"),
			wantArgs: &guvnor.StatusArgs{
				ServiceName: "barg",
			},
			wantErr: "rats",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			mEngine := &mockEngine{}
			provider := func() (engine, error) {
				return mEngine, nil
			}

			if tt.wantArgs != nil {
				mEngine.
					On(
						"Status",
						mock.MatchedBy(func(_ context.Context) bool {
							return true
						}),
						*tt.wantArgs).
					Return(tt.engineRes, tt.engineErr)
			}

			cmd := newStatusCmd(provider)
			stdout := bytes.NewBufferString("")
			stderr := bytes.NewBufferString("")
			cmd.SetOut(stdout)
			cmd.SetErr(stderr)
			cmd.SetArgs(tt.args)

			err := cmd.Execute()
			if tt.wantErr != "" {
				assert.EqualError(t, err, tt.wantErr)
			} else {
				assert.NoError(t, err)
			}

			if golden.Update() {
				golden.SetP(t, "stdout", stdout.Bytes())
				golden.SetP(t, "stderr", stderr.Bytes())
			}
			assert.Equal(t, golden.GetP(t, "stdout"), stdout.Bytes())
			assert.Equal(t, golden.GetP(t, "stderr"), stderr.Bytes())

			mEngine.AssertExpectations(t)
		})
	}
}
