FROM node:6.10
COPY . /src
RUN cd /src && npm install
CMD ["node", "/src/app.js"]
