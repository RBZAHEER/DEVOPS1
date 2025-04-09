#!/bin/bash
set -e

echo "Starting Nginx server..."
systemctl enable nginx
systemctl restart nginx

echo "Nginx started successfully."
