FROM node:latest

RUN npm i -g @nestjs/cli

RUN git clone https://github.com/Baniomash/Projeto_Web_Nuvem-backend.git

WORKDIR /Projeto_Web_Nuvem-backend/

RUN npm install

CMD ["npm", "start"]