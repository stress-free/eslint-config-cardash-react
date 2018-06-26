#!/bin/sh

# Check if the .git repo is present before running git commands
# We need to make this check because yarn runs the `prepare` script
# when installing this dependecy, which fails since the .git directory
# isn't present
if [ -d ".git" ]; then
  git config commit.template $PWD/.gitcommit_template

  git config alias.sync "!git co master && git pull && git co - && git rebase master"
fi

