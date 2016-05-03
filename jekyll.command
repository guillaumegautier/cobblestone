#!/bin/bash
cd "$(dirname "$0")"/src
sudo jekyll build --destination ../html --watch
