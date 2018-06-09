#!/bin/sh

git config commit.template $PWD/.gitcommit_template

git config alias.sync "!git co master && git pull && git co - && git rebase master"
