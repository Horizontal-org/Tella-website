#!/bin/bash
############################################################
# Help                                                     #
############################################################
Help()
{
   # Display Help
   echo "deploy docusaurus"
   echo
   echo "Syntax: deploy.sh -b branch_name"
   echo "options:"
   echo "b     add branch name [REQUIRED]"
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
while getopts ":hb:" option; do
   case $option in
      h) # display Help
         Help
         exit;;
      b)
         Branch=$OPTARG;;
     \?) # Invalid option
         echo "Error: Invalid option"
         exit;;
   esac
done


if [ -z "$Branch" ]
then
      echo "Error: need a branch name"
else
      echo "Deploying $Branch"

      git fetch --all 

      git reset --hard origin/$Branch

      npm install

      npm run build
fi