# TapInOut Pré-lançamento

Landing page minimalista e responsiva para o aplicativo TapInOut.

## Rodando localmente

1. Instale o Docker.
2. Clone este repositório e navegue até a pasta do projeto.
3. Execute:

```sh
docker build -t tapinout-landing .
docker run -p 8080:80 tapinout-landing
```

Acesse [http://localhost:8080](http://localhost:8080) no navegador.

## Deploy no Google Cloud Run

1. Faça login no Google Cloud e configure o projeto.
2. Faça build e push da imagem para o Google Container Registry:

```sh
gcloud builds submit --tag gcr.io/SEU_PROJETO/tapinout-landing
```

3. Faça deploy no Cloud Run:

```sh
gcloud run deploy tapinout-landing \
  --image gcr.io/SEU_PROJETO/tapinout-landing \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

Substitua `SEU_PROJETO` pelo ID do seu projeto Google Cloud.

## Personalização
- Substitua `logo.png` pela logo oficial do TapInOut.
- Edite os textos em `main.js` para ajustes de tradução.

---
Desenvolvido por [Elevate](https://www.elevatebr.org) #   t a p i n o u t - p r e v e n d a s  
 