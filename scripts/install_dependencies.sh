#!/bin/bash
set -e

echo "Updating system and installing Nginx..."
yum update -y
yum install -y nginx

echo "Dependencies installed."
