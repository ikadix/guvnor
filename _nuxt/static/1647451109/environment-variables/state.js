window.__NUXT__=(function(a,b,c,d,e,f,g,h){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1647451109",layout:"default",error:c,state:{categories:{en:{"":[{slug:"index",title:"Introduction",category:d,to:e}],Guide:[{slug:"getting-started",title:"Getting started",category:a,to:"\u002Fgetting-started"},{slug:"guvnor-configuration",title:"Guvnor Configuration",category:a,to:"\u002Fguvnor-configuration"},{slug:"service-configuration",title:"Service Configuration",category:a,to:"\u002Fservice-configuration"},{slug:"deployment-strategies",title:"Deployment Strategies",category:a,to:"\u002Fdeployment-strategies"},{slug:"environment-variables",title:"Environment Variables",category:a,to:f}],Community:[{slug:"releases",title:"Releases",category:"Community",to:"\u002Freleases"}]}},releases:[{name:"v0.6.5",date:"2022-03-16T10:17:28Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Eefe901a fix: allow host header to be provided\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.6.4",date:"2022-03-16T09:47:22Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ee35950f Merge pull request #38 from krystal\u002Ftesting-refactoring\u003C\u002Fli\u003E\n\u003Cli\u003E2cea141 Merge pull request #41 from krystal\u002Fgraceful-shutdown-cleanup\u003C\u002Fli\u003E\n\u003Cli\u003E15d4354 feat: gracefully shut down processes and add cleanup command\u003C\u002Fli\u003E\n\u003Cli\u003E3d6a3ea refactor: tidy up fetching of network mode\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.6.3",date:"2022-03-15T14:35:54Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ebe6d1fb Merge pull request #37 from krystal\u002Fuid-gid-configuration\u003C\u002Fli\u003E\n\u003Cli\u003E01a600f feat: allow user to be configured. closes #36.\u003C\u002Fli\u003E\n\u003Cli\u003E4c51741 fix: ensure user is used from more specific config\u003C\u002Fli\u003E\n\u003Cli\u003Ee115466 refactor: extract GetMounts into shared code\u003C\u002Fli\u003E\n\u003Cli\u003Ea2cf354 refactor: tidy user calculation out of deploy\u002Frun\u003C\u002Fli\u003E\n\u003Cli\u003Ec8db892 tests: extract and test image calculation\u003C\u002Fli\u003E\n\u003Cli\u003E7343489 tests: fix test for STC\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.6.2",date:"2022-03-14T17:28:28Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E14fb653 tweak: allow username authentication to be provided\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.6.1",date:"2022-03-14T12:05:21Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E5b41d0b Merge branch &#39;main&#39; of github.com:krystal\u002Fguvnor into main\u003C\u002Fli\u003E\n\u003Cli\u003Ec315a65 Merge pull request #28 from krystal\u002Fhooks\u003C\u002Fli\u003E\n\u003Cli\u003Ea52ee64 Merge pull request #29 from krystal\u002Fadd-docs\u003C\u002Fli\u003E\n\u003Cli\u003Ee770398 Merge pull request #32 from krystal\u002Fready-check-during-roll-out\u003C\u002Fli\u003E\n\u003Cli\u003E7fb4244 Merge pull request #35 from krystal\u002Ffix-init-perms\u003C\u002Fli\u003E\n\u003Cli\u003E74315c5 ci: fix docs ci flow\u003C\u002Fli\u003E\n\u003Cli\u003Eeff7d0e ci: only run docs workflow on main\u003C\u002Fli\u003E\n\u003Cli\u003Ef246d4e feat: init docs site\u003C\u002Fli\u003E\n\u003Cli\u003E69017c6 feat: run ready checks on deployment of services\u003C\u002Fli\u003E\n\u003Cli\u003E578bda2 fix: ensure created directories have execute permission\u003C\u002Fli\u003E\n\u003Cli\u003Eeea7d98 tweak: add validation to readiness check fields\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.6.0",date:"2022-03-07T17:30:49Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E56728c2 feat: deployment hooks\u003C\u002Fli\u003E\n\u003Cli\u003Ef3d1b27 tweak: remove overly verbose log output\u003C\u002Fli\u003E\n\u003Cli\u003E4cf4a11 tweak: rename hook to callback\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.5.3",date:"2022-03-07T11:23:21Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ebc42d3c fix: catch incorrect number of params\u003C\u002Fli\u003E\n\u003Cli\u003E694efdf tests: add quick test for ordered keys\u003C\u002Fli\u003E\n\u003Cli\u003Ebf68db3 tweak: always update state even if deployment fails, include a status\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.5.2",date:"2022-03-03T15:01:45Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E559881e Merge pull request #24 from krystal\u002Finteractive-tasks\u003C\u002Fli\u003E\n\u003Cli\u003E45881a9 Merge pull request #25 from krystal\u002Ffix-indeterministic-process-ordering\u003C\u002Fli\u003E\n\u003Cli\u003Ec0bae24 feat: interactive task support\u003C\u002Fli\u003E\n\u003Cli\u003Ee665bbf fix: ensure process statuses are listed in a consistent order\u003C\u002Fli\u003E\n\u003Cli\u003E300833a tweak: remove .vscode from source control\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.5.1",date:"2022-03-01T17:25:52Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E02e5be4 Merge pull request #23 from krystal\u002Ffix-caddy-config-corruption\u003C\u002Fli\u003E\n\u003Cli\u003E379a391 fix: ensure caddy configurations survive restarts\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.5.0",date:"2022-03-01T15:14:45Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E8f163d0 Merge pull request #20 from krystal\u002Fedit-command\u003C\u002Fli\u003E\n\u003Cli\u003Ebe51e36 feat: \u003Ccode\u003Eguvnor edit\u003C\u002Fcode\u003E allowing easy editing of files\u003C\u002Fli\u003E\n\u003Cli\u003Edb671f1 feat: allow service root config to be overrided\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.10",date:"2022-02-28T12:12:13Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E0624581 Merge pull request #15 from krystal\u002Fcolors\u003C\u002Fli\u003E\n\u003Cli\u003E2cd0b82 feat: make status look pretty\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.9",date:"2022-02-23T16:58:20Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ec88179c refactor: name colours by semantic meaning\u003C\u002Fli\u003E\n\u003Cli\u003Ed5eccf4 tests: add test for docker image parsing logic\u003C\u002Fli\u003E\n\u003Cli\u003E565ccec tests: add tests for status command\u003C\u002Fli\u003E\n\u003Cli\u003E4503960 tests: introduce tests for deploy command\u003C\u002Fli\u003E\n\u003Cli\u003Eff14abb tweak: add colours to output\u003C\u002Fli\u003E\n\u003Cli\u003E7bac5a7 tweak: add prettier coloured messages to status command\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.8",date:"2022-02-22T16:04:43Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E87d2eb3 refactor: use docker types for auth\u003C\u002Fli\u003E\n\u003Cli\u003Ec591fa8 tweak: support host.docker.internal resolution to host on non-host-networked containers\u003C\u002Fli\u003E\n\u003Cli\u003E1df0913 tweak: use docker suggested host when selecting credentials\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.7",date:"2022-02-22T10:03:59Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ecdf3e6b fix: handle unhandled error from purge deployment\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.6",date:"2022-02-22T09:44:30Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ed5ca376 refactor: tidy up deployment code into more units &amp; support image override\u003C\u002Fli\u003E\n\u003Cli\u003Eaa2cae9 wip: add timeouts to http checks\u003C\u002Fli\u003E\n\u003Cli\u003Ec058d67 wip: add wait to ready checks\u003C\u002Fli\u003E\n\u003Cli\u003E37b535c wip: ready check to wait for caddy to come onlien\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.5",date:"2022-02-21T16:55:05Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ec6712b0 fix: tiny bug with validator being recreated\u003C\u002Fli\u003E\n\u003Cli\u003E13cca63 refactor: implement default quantity more cleanly\u003C\u002Fli\u003E\n\u003Cli\u003E9703450 tweak: allow host networking default to be specified\u003C\u002Fli\u003E\n\u003Cli\u003E5dc37ed tweak: default to one replica\u003C\u002Fli\u003E\n\u003Cli\u003Ee1da2cf wip: add framework for validating\u003C\u002Fli\u003E\n\u003Cli\u003Ea34eddc wip: basic http check, most of parent check\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.4",date:"2022-02-21T10:53:49Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ec7f5137 tweak: allow host mode config for task runs\u003C\u002Fli\u003E\n\u003Cli\u003Ed51bbf4 tweak: error on unknown fields in main config\u003C\u002Fli\u003E\n\u003Cli\u003E67a0c1d tweak: error on unknown fields in service config yaml\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.3",date:"2022-02-18T16:51:54Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E0a087bc tweak: load docker credentials from docker config\u003C\u002Fli\u003E\n\u003Cli\u003E0312b62 tweak: remove unintentional log message\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.2",date:"2022-02-18T11:10:47Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Efb9b456 feat: support containers running as privileged\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.1",date:"2022-02-18T10:56:27Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Efa21e6d feat: host networking support\u003C\u002Fli\u003E\n\u003Cli\u003E5c20351 tweak: generate our own ports rather than letting docker choose\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.4.0",date:"2022-02-17T15:48:41Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ef959d7c feat: add last deployed at time to status and state\u003C\u002Fli\u003E\n\u003Cli\u003E6ecdcfb feat: rudimentary status command\u003C\u002Fli\u003E\n\u003Cli\u003E07f83a0 fix: dodgy json struct tag in ServiceState\u003C\u002Fli\u003E\n\u003Cli\u003Ee7494f5 tweak: rename install to init\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.3.1",date:"2022-02-16T16:31:55Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E294e964 feat: installer command\u003C\u002Fli\u003E\n\u003Cli\u003Eeb05826 tweak: output log message on install\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.3.0",date:"2022-02-16T13:01:30Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ef7f0ed1 Merge branch &#39;main&#39; of github.com:krystal\u002Fguvnor into main\u003C\u002Fli\u003E\n\u003Cli\u003Eeb5850c ci: upload test coverage to codeclimate\u003C\u002Fli\u003E\n\u003Cli\u003Ec11d0df feat: functioning task run w\u002F ephemeral container\u003C\u002Fli\u003E\n\u003Cli\u003E21f0f8e feat: load main config from \u002Fetc\u002Fguvna\u002Fconfig.yaml\u003C\u002Fli\u003E\n\u003Cli\u003Ef4cbf9d feat: support for bind mounts\u003C\u002Fli\u003E\n\u003Cli\u003E0df3c88 refactor: extract svc cfg load code\u003C\u002Fli\u003E\n\u003Cli\u003E94a8586 refactor: remove redundant service cfg load function\u003C\u002Fli\u003E\n\u003Cli\u003E2804896 tests: add test for finding default service\u003C\u002Fli\u003E\n\u003Cli\u003E4d57f47 tweak: apply restart policy to containers\u003C\u002Fli\u003E\n\u003Cli\u003Ee3d06fc tweak: use \u003Ccode\u003Eguvnor\u003C\u002Fcode\u003E not \u003Ccode\u003Eguvna\u003C\u002Fcode\u003E in a few places\u003C\u002Fli\u003E\n\u003Cli\u003E88d1806 wip: add skeleton of run command\u003C\u002Fli\u003E\n\u003Cli\u003E21f248f wip: create container for task run\u003C\u002Fli\u003E\n\u003Cli\u003E9df1331 wip: further skeleton run task, load tasks from file\u003C\u002Fli\u003E\n\u003Cli\u003E7dbd073 wip: skeleton out status commnad\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.2.2",date:"2022-02-15T10:54:23Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003Ef623d28 feat: store deployment state in filesystem\u003C\u002Fli\u003E\n\u003Cli\u003E332c95b tweak: adjust log levels\u003C\u002Fli\u003E\n\u003Cli\u003E52aebbd wip: start working on state storage\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.2.1",date:"2022-02-14T15:42:44Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E2022989 fix: capture error emitted by io.Copy for pull streams\u003C\u002Fli\u003E\n\u003Cli\u003Edd73d76 refactor: tidy calls to Caddy API into their own methods\u003C\u002Fli\u003E\n\u003Cli\u003E9eb4991 wip: allow caddy routes to be patched if already existing\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v0.1.0",date:"2022-02-09T17:36:23Z",body:"\u003Ch2 id=\"changelog\"\u003EChangelog\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E4f08d32 Merge branch &#39;main&#39; of github.com:krystal\u002Fguvnor\u003C\u002Fli\u003E\n\u003Cli\u003E2d8b4b2 Merge branch &#39;main&#39; of github.com:krystal\u002Fguvnor\u003C\u002Fli\u003E\n\u003Cli\u003E680e495 add network details to service\u003C\u002Fli\u003E\n\u003Cli\u003Eeb4e19a add some examples\u003C\u002Fli\u003E\n\u003Cli\u003E7d1a856 ci: add github token to goreleaser release\u003C\u002Fli\u003E\n\u003Cli\u003E8d97995 ci: add go releaser\u003C\u002Fli\u003E\n\u003Cli\u003E2fda2cc ci: add linting workflow\u003C\u002Fli\u003E\n\u003Cli\u003Ee246241 ci: configure dir to build\u003C\u002Fli\u003E\n\u003Cli\u003E6005888 ci: remove support for windows\u003C\u002Fli\u003E\n\u003Cli\u003E67311c4 init cmd entrypoint\u003C\u002Fli\u003E\n\u003Cli\u003Ef6a19fd init go mod\u003C\u002Fli\u003E\n\u003Cli\u003Ea318fa3 initial commit\u003C\u002Fli\u003E\n\u003Cli\u003E767746c various tweaks to service example config\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"}],settings:{title:"Guvnor Docs",url:"https:\u002F\u002Fkrystal.github.io\u002Fguvnor\u002F",defaultDir:"docs",defaultBranch:"main",filled:b,github:"krystal\u002Fguvnor",twitter:"@krystal_labs",logo:{light:"\u002Flogo-light.svg",dark:"\u002Flogo-dark.svg"},category:d},menu:{open:g},i18n:{routeParams:{}}},serverRendered:b,routePath:f,config:{_app:{basePath:e,assetsPath:"\u002F_nuxt\u002F",cdnURL:c},content:{dbHash:"1ceda708"}},__i18n:{langs:{}},colorMode:{preference:h,value:h,unknown:b,forced:g}}}("Guide",true,null,"","\u002F","\u002Fenvironment-variables",false,"system"));