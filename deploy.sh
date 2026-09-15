#!/bin/bash
############################################################
# Help                                                     #
############################################################
Help()
{
   # Display Help
   echo "deploy docusaurus"
   echo
   echo "Syntax: deploy.sh -b branch_name -u url"
   echo "options:"
   echo "b     add branch name [REQUIRED]"
   echo "u     website URL [REQUIRED]"
   echo "h     Print this Help."
   echo
}

############################################################
############################################################
# Main program                                             #
############################################################
############################################################

unset Branch

############################################################
# Process the input options. Add options as needed.        #
############################################################
# Get the options
while getopts ":hb:u:" option; do
   case $option in
      h) # display Help
         Help
         exit;;
      b)
         Branch=$OPTARG;;
      u)
         export PRODUCTION_URL=$u;;
     \?) # Invalid option
         echo "Error: Invalid option"
         exit;;
   esac
done


if [ -z "$Branch" ]
then
      echo "Error: need a branch name"
      exit 1
fi

if [ -z "$PRODUCTION_URL" ]
then
  echo "Error: needs a URL"
  exit 1
fi

echo "Deploying $Branch with $PRODUCTION_URL"

git fetch --all

git reset --hard origin/$Branch

npm install

npm run build

rsync -av --delete-after ./build/ root@tella-app.org:/var/www/${PRODUCTION_URL%https://}/
