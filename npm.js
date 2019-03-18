// The populare Node package manager
// Yarn is a package manager fro Facebook
// The Npm CLI and Npm registry they work together out of the box
// The Npm CLI can work with different registries, it can be used with local files, folders, and private registries
// and it can be even used with git repositories directly. like npm i gitprofileName/repoName or with version number npm i gitprofileName/repoName#versionNumber
// Checking what package a command will install without actually installing them npm --dry-run
// To see a list of global packages has been installed npm ls -g to see only the top level packages npm ls -g --depth=0 to see more information npm ll -g --depth=0
// To save the output in a json file npm ls -g --depth=0 --json 
// npm i -O consider optional dependencies like nodemon
// npm update to update either a single or all installed packeges
// npm outdated -g to check outdated global packages
// npm config list -l  to se all npm's configuration
// npm config set init-author-name "Yasser morteza"
// npm config list -l | grep init
// npm config delete init-author-name 
// npm config set save true  // it will always serve --save flag in command
// npm search keyword in packages like npm search lint
// npm help shrinkwrap  // Is useful to lockdown all the packages, when anybody installs the packages he will install all with same version always
// npm home packageName to open the hoem page of the package in browser
// npm repo packageName to open the repo page of the package
// npm prune to remove the packages which is not saved in package.json but exist in node_modules folder
// npm visnup  // npm easter egges
// npm xmas