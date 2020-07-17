(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{xbZq:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return O}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=l("AnchorLinks"),b=l("AnchorLink"),p=l("InlineNotification"),s=l("Tabs"),u=l("Tab"),m={_frontmatter:i},d=o.a;function O(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(d,r({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{mdxType:"AnchorLinks"},Object(a.b)(b,{mdxType:"AnchorLink"},"Required skills"),Object(a.b)(b,{mdxType:"AnchorLink"},"Create accounts"),Object(a.b)(b,{mdxType:"AnchorLink"},"Cloud Native VM"),Object(a.b)(b,{mdxType:"AnchorLink"},"Run System Check Script"),Object(a.b)(b,{mdxType:"AnchorLink"},"Install CLIs and tools"),Object(a.b)(b,{mdxType:"AnchorLink"},"Environment Setup"),Object(a.b)(b,{mdxType:"AnchorLink"},"Reading Material")),Object(a.b)("h2",null,"Required skills"),Object(a.b)("p",null,"This activites contained here require you to be proficient in working from the command line with a linux shell (Bash, Zsh, etc.) Below is a partial list of activites you should be able to perform. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Copy, move, and rename files"),Object(a.b)("li",{parentName:"ul"},"Understand linux file permissions"),Object(a.b)("li",{parentName:"ul"},"Edit text files (vi, vim, emacs, etc)"),Object(a.b)("li",{parentName:"ul"},"Edit environment variables ($PATH)")),Object(a.b)("p",null,"Here is a course for learning (or brushing up) on working from the linux command line ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.udacity.com/course/linux-command-line-basics--ud595"}),"Linux Command Line Basics")),Object(a.b)("h2",null,"Create accounts"),Object(a.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda Account"),": The account is free and easy to create.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://www.redhat.com/en"}),"RedHat Account"),": Needed for CodeReady Containers."))),Object(a.b)("h2",null,"Cloud Native VM"),Object(a.b)("p",null,"Use the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/csantanapr/vagrant-cloud-native#install"}),"Cloud Native VM")," it comes pre-installed with kubernetes and all cloud native CLIs."),Object(a.b)("p",null,"Is highly recommended for Windows users to use this VM."),Object(a.b)("h2",null,"Run System Check Script"),Object(a.b)("p",null,"Run the following command in your terminal to check which tools need to be installed."),Object(a.b)("p",null,"Using wget:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"wget -O - https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(a.b)("p",null,"Using curl:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"curl -s https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(a.b)("p",null,"After the script is run, make sure to install any missing tools."),Object(a.b)("h2",null,"Install CLIs and tools"),Object(a.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Don’t install just the ",Object(a.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(a.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(a.b)(p,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(a.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(a.b)("a",r({parentName:"p"},{href:"/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for building and running docker images."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(a.b)("li",{parentName:"ul"},"Enabling ",Object(a.b)("a",r({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(a.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Minikube"),": Follow the instructions for your Operating System."))),Object(a.b)(p,{kind:"warning",mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using minikube.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://code-ready.github.io/crc/#installing-codeready-containers_gsg"}),"OpenShift CodeReady Containers (CRC)"))),Object(a.b)("h3",null,"Environment Setup"),Object(a.b)(s,{mdxType:"Tabs"},Object(a.b)(u,{label:"MiniKube",mdxType:"Tab"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Verify your cluster has 4GB+ memory, and kubernetes 1.16+",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"minikube config view\n"))),Object(a.b)("li",{parentName:"ul"},"Verify your ",Object(a.b)("inlineCode",{parentName:"li"},"vm-driver")," is set for ",Object(a.b)("inlineCode",{parentName:"li"},"hyperkit"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"minikube config set vm-driver hyperkit\n"))),Object(a.b)("li",{parentName:"ul"},"In case memory is not set, or need to increase set the memory and recreate the VM",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"minikube config set memory 4096\nminikube config set kubernetes-version v1.16.6\nminikube delete\nminikube start\n"))),Object(a.b)("li",{parentName:"ul"},"Kubernetes should be v1.15+",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"kubectl version\n"))))),Object(a.b)(u,{label:"CRC (MiniShift)",mdxType:"Tab"},Object(a.b)("p",null,"Make sure CRC is installed. Check out the ",Object(a.b)("a",r({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg"}),"CRC Page")," "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Setup CRC ")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"  crc setup\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Start CRC ")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"  crc start\n"))),Object(a.b)(u,{label:"IKS",mdxType:"Tab"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Login to ",Object(a.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud")," with your IBM ID.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click “Create Resource” and search for “kubernetes service”.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Select the tile for “Kubernetes Service” and do the following:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Select the “Free Cluster” plan."),Object(a.b)("li",{parentName:"ul"},"Name your cluster."),Object(a.b)("li",{parentName:"ul"},"Select “Create” at the bottom right of the screen."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Once the Cluster is provisioned, Click on the “Connect via CLI” in the top right corner.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Follow the instructions to connect and you are set to go.")))),Object(a.b)(u,{label:"OpenShift on IBM Cloud (4.x)",mdxType:"Tab"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In this approach you share an OpenShift cluster on IBM Cloud with other bootcamp attendees.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Considering 10-15 attendees we recommend a cluster with 3 worker nodes (each 8 vCPUs + 32GB RAM - b3c.8x32).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Ask your IBM cloud account owner to provide access to an OpenShift cluster.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In addition to the IBM Cloud CLI also install the ",Object(a.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift?topic=openshift-openshift-cli#cli_oc"}),"OpenShift Origin CLI")," to be able to execute all commands.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open your OpenShift web console from within your IBM cloud account, select your profile and choose “copy login command” to retrieve an access token for the login.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Login with your OpenShift Origin CLI."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"  oc login --token=<token> --server=<server-url>:<server-port>\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create your own project / namespace in OpenShift that you will leverage across all labs."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"  oc new-project <dev-your_initials>\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Validate in the OpenShift web console that your project has been created (Administrator view -> Home -> Projects)"))))),Object(a.b)("h2",null,"Reading Material"),Object(a.b)("p",null,"Watch the video and read the overview on this page ",Object(a.b)("a",r({parentName:"p"},{href:"https://pages.github.ibm.com/CASE/cloudnative-bootcamp/cloud-native-overview"}),"Overview")))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prerequisites-index-mdx-443243b068da08842897.js.map