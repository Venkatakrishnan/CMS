# API Documentation 

This documentation talks about the tools & technologies used for api development, installation/setting up the environment for development.

## Web api

A server-side web API ([What it is](https://en.wikipedia.org/wiki/Web_API)) is a programmatic interface consisting of one or more publicly exposed endpoints to a defined request–response message system,
typically expressed in JSON or XML, which is exposed via the web—most commonly by means of an HTTP-based web server.

## RESTful Services

* Representational state transfer (REST) or RESTful Web services uses internet to provide interoperability between various computer systems.

* RESTful applications use HTTP requests to post data (create and/or update), read data (e.g., make queries), and delete data.Thus, REST uses HTTP for all four CRUD (Create/Read/Update/Delete) operations. 

* REST-compliant Web services allow requesting systems to access and manipulate textual representations of Web resources using a uniform and predefined set of stateless operations.

* In a RESTful Web service, requests made to a resource's URI will elicit a response that may be in XML, HTML JSON (preferred) or some other defined format. The response may confirm that some alteration has been made to the stored resource, and it may provide hypertext links to other related resources or collections of resources. 

* Using HTTP, as is most common, the kind of operations available include those predefined by the HTTP verbs GET, POST, PUT, DELETE and so on. 
 
 For more information [Refer here](http://rest.elkstein.org/2008/02/what-is-rest.html)

## Things to Note

* Both the api and the documentation follows the [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) principle. 

* api will be following [Semantic Versioning](http://semver.org/)

# Technologies Used

## Node.js

* Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

* The Node.js package ecosystem, [npm][], is the largest ecosystem of open source libraries in the world.

* The Node.js project is supported by the[Node.js Foundation](https://nodejs.org/en/foundation/). 

If you need help using or installing Node.js, please use the
[nodejs/help](https://github.com/nodejs/help) issue tracker.

### Resources for nodejs developers

* [ES6][]
* [nodejs application guide][]
* [Babel][]

#### Official Resources

* [Website][]
* [Node.js Help][]
* [npm][]

## Express

This app uses [Express](http://expressjs.com/) framework to handle and serve the api requests. 

>**References**
* [Libuv](https://github.com/libuv/libuv)


## IIS Node

iisnode is a native IIS module that allows hosting of node.js applications in IIS on Windows. The iisnode module is a proper IIS module, just like ASP.NET and PHP.
This means you can have a single website that has multiple kinds of content. It also enables vertical scaling of nodejs application which by default supports horizontal scaling.

### Other Benefits

* **Process management.** The iisnode module takes care of lifetime management of node.exe processes making it simple to improve overall reliability. You don’t have to implement infrastructure to start, stop, and monitor the processes.

* **Other IIS benefits.** Port sharing, security, URL rewriting, compression, caching, logging

* **Scalability on multi-core servers.** Since node.exe is a single threaded process, it only scales to one CPU core. The iisnode module allows creation of multiple node.exe processes per application and load balances the HTTP traffic between them, therefore enabling full utilization of a server’s CPU capacity without requiring additional infrastructure code from an application developer.

# Development Tools

## Visual Studio Code

[VS Code](https://code.visualstudio.com/) is a lightweight but powerful development environment for building and debugging modern web and cloud applications.
It is free and available on your favorite platform - Linux, Mac and Windows.

For other information about VS Code, head over to [VS Code website](https://code.visualstudio.com) for additional information.

## Running VS Code on Windows

### Installation

1. Download the [Visual Studio Code installer](https://go.microsoft.com/fwlink/?LinkID=534107) for Windows.
2. Once it is downloaded, run the installer (VSCodeSetup-stable.exe). This will only take a minute.
3. By default, VS Code is installed under `C:\Program Files (x86)\Microsoft VS Code` for a 64-bit machine.

You can also find a Zip archive [here](https://code.visualstudio.com/docs/?dv=winzip).

>**Note:** .NET Framework 4.5.2 is required for VS Code.  If you are using Windows 7, please make sure [.NET Framework 4.5.2](https://www.microsoft.com/en-us/download/details.aspx?id=42643) is installed.

>**Tip:** Setup will optionally add Visual Studio Code to your `%PATH%`, so from the console you can simply type `code .` to open VS Code on that folder. You will need to restart your console after the installation for the change to the `%PATH%` environmental variable to take effect.

### Updates

VS Code ships monthly [releases](https://code.visualstudio.com/updates) and supports auto-update when a new release is available. If you're prompted by VS Code, accept the newest update and it will be installed (you won't need to do anything else to get the latest bits). If you'd rather control VS Code updates manually, see [How do I opt out of auto-updates](https://code.visualstudio.com/docs/supporting/faq#_how-do-i-opt-out-of-vs-code-autoupdates).

### Next Steps

Once you have installed VS Code, these topics will help you learn more about VS Code:

* [Additional Components](https://code.visualstudio.com/docs/setup/additional-components) - Learn how to install Git, Node.js, TypeScript and tools like Yeoman.
* [The Basics](https://code.visualstudio.com/docs/editor/codebasics) - A quick orientation around VS Code.
* [User/Workspace Settings](https://code.visualstudio.com/docs/customization/userandworkspace) - Learn how to configure VS Code to your preferences through settings.
* Additional extensions make it a breeze to work with VS Code. [Common extensions](https://code.visualstudio.com/docs/editor/extension-gallery) used in this project include (C/C++, C# for VSCode, Debugger for Chrome, Powershell & Mono-Debug).

### Trouble with the installer

Try using the [zip file](https://code.visualstudio.com/docs/?dv=winzip) instead of the installer.  To use this, unzip VS Code in your **Program Files** folder.

>**Note:** When VS Code is installed via a Zip file, you will need to manually update it for each [release](/updates).

##  Visual Studio

Instead of using VS Code (The free version of visual studio) full fledged version Visual Studio 2015 or later can also be used to develop node js applications.
[Things to do Before Installing VS2015](http://www.visualstudio.com/vs/support/?wt.mc_id=dev14~vssetup~cancel&campaign=ct!!DB30B75989E8428B8C0D8C9E4B3CE017#!articles/816-5750-what-do-i-need-to-do-before-installing-visual-studio)
To be able to develop node js applications download and install [Node JS tools for Visual Studio](https://www.visualstudio.com/vs/node-js/) after installing Visual Studio.

## Oracle - Node

The [node-oracledb Library](http://www.oracle.com/technetwork/database/database-technologies/scripting-languages/node_js/index.html) is used to connect to oracle database to fetch data.
Refer [node-oracledb](https://github.com/oracle/node-oracledb) for details, documentation & examples.

### Node-oracledb Installation on Windows

**Note:** An Oracle Technology Network article [Installing node-oracledb on Microsoft Windows](https://community.oracle.com/docs/DOC-931127) 
has step-by-step Windows installation instructions that you can alternatively refer to.

#### Install required tools

Install a C/C++ build environment such as Microsoft Visual Studio 2012. Compilers supported by Oracle libraries are found in [Oracle documentation](https://docs.oracle.com/en/database/) for each version,
for example [Oracle Database Client Quick Installation Guide 12c Release 1 (12.1) for Microsoft Windows x64 (64-Bit)](https://docs.oracle.com/database/121/NXCQI/toc.htm#NXCQI108).

Install the Python 2.7 [MSI](https://www.python.org/downloads). Select the customization option to Add `python.exe` to `Path` variables.

If you use a 32-bit Node.js, make sure to use a 32-bit Oracle client during build and run time. Otherwise use a 64-bit Node.js with a 64-bit Oracle client. The instructions below use a 64-bit stack.

#### Install the free Oracle Instant Client ZIPs

Building and running node-oracledb needs appropriate Oracle client libraries installed first. These libraries:

* are included in (i) Oracle database, or (ii) in the full Oracle client, or (iii) in Oracle Instant Client. You need one of these.

* must be version 11.2 or greater

* must match the Node.js 32 or 64-bit architecture

If you need appropriate Oracle client libraries, then download the free Instant Client Basic and SDK ZIP files from [Oracle Technology Network](http://www.oracle.com/technetwork/topics/winx64soft-089540.html).

Extract `instantclient_basic-windows.x64-12.1.0.2.0.zip` and `instantclient_sdk-windows.x64-12.1.0.2.0.zip` to the same directory.

Optionally rename the resulting Instant Client directory to the default location used by the node-oracledb installer:
`ren C:\instantclient_12_1 C:\oracle\instantclient`

Add the directory to `PATH`. For example on Windows 7, update `PATH` in Control Panel -> System -> Advanced System Settings -> Advanced -> Environment Variables -> System variables -> `PATH` 
and add your path, such as `C:\oracle\instantclient.`

If you have multiple versions of Oracle libraries installed, make sure the desired version occurs first in the path.

#### Install the add-on

Start Visual Studio and open a Developer Command Prompt within it. If you use vs code,open vs code and start the terminal.

Use set `PATH` in the shell to confirm the `Python`, `Node.js` and `Oracle` directories are correctly set. If they are not, then set `PATH` manually in the shell, or set it in the System Properties panel
and restart the command shell. **NOTE** For VS code there is no need to restart the terminal if powershell is used as the terminal shell.

Make sure the Microsoft Visual Studio environment variables are set appropriately. Use set PATH and verify it contains your Visual Studio paths.
If they are not set, use vcvars64.bat (or vcvars.bat if you building with 32-bit binaries) to set the environment. 
Alternatively you can open the 'Developer Command Prompt for Visual Studio' which has environment variables already configured.

Tell the installer where to locate the Oracle client libraries and header files by setting the `OCI_LIB_DIR` and `OCI_INC_DIR` variables. Do not add them to `PATH`.

For Instant Client use:

`set OCI_LIB_DIR=C:\oracle\instantclient\sdk\lib\msvc`
`set OCI_INC_DIR=C:\oracle\instantclient\sdk\include`

Use absolute paths for the variable values. These variables are only needed during installation.

If you are installing with a local database or the full Oracle client, then locate the Oracle directory and set the node-oracle installer variables similar to:

`set OCI_LIB_DIR=C:\oracle\product\12.1.0\dbhome_1\oci\lib\msvc`
`set OCI_INC_DIR=C:\oracle\product\12.1.0\dbhome_1\oci\include`

In this case, also make sure that `PATH` contains `C:\oracle\product\12.1.0\dbhome_1\bin`.

If you are behind a firewall you may need to set your proxy, for example:

`set http_proxy=http://my-proxy.example.com:80/`

Install node-oracledb from the NPM registry using the npm command: 

`npm install oracledb` 

#### Copying node-oracledb Binaries on Windows

Node-oracledb binaries can be copied between compatible Windows systems. Both computers must also have the same version and architecture of Node.js.

Oracle client libraries of the same architecture and the same version used for building node-oracledb should be in the destination computer's PATH.

After `node-oracle` has been built on the source computer, copy the `node_modules\oracledb directory` to the destination computer's `node_module` directory.

The destination computer's PATH needs to include Visual Studio redistributables. If you used Oracle client 11.2 then the Visual Studio 2005 redistributable is required.
For Oracle client 12.1, use the Visual Studio 2010 redistributable.

You can also find out the version required by locating the library OCI.DLL on the source computer and running:

`dumpbin /dependents oci.dll`

The version of `MSVC*.DLL` in the output indicates which redistributable is required on the destination computer. For example, if you see `MSVCR100.dll` then you need the VC++ 10 redistributable.

[nodejs application guide]: https://nodejs.org/en/docs/guides/
[ES6]: https://nodejs.org/en/docs/es6/
[npm]: https://www.npmjs.com
[Website]: https://nodejs.org/en/
[Node.js Help]: https://github.com/nodejs/help
[Babel]: https://babeljs.io/