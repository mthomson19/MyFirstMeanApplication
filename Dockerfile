FROM node:0.12

# Set development environment as default
ENV NODE_ENV development

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
CMD ["node server.js"]
