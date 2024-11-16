# Installation
* install typescript -> npm install -g typescript
* initiate config file -> tsc --init
* compile ts file -> tsc --noEmitOnError <file_name.ts>


# For Enable TypeScript hints 
* open setting -> command + ,
* search -> typescript inlay hints
* enable required hints
* for more visit this site -> https://code.visualstudio.com/docs/typescript/typescript-editing




# How to avoid running tsc command to changes into JS file to sync up with TS file
* tsc <file_name> --watch

# How to make the above thing for all the TS file with setting up some configuration
* run -> tsc --watch

# If we want to generate JS files into different folder/dir then
* In tsconfig.json file 
   * Search rootDir -> [add the directory where ts files are present]
   * Search outDir -> "./dir"  // where js files will be placed automatically after compilation