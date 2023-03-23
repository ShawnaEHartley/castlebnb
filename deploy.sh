npm run build
docker build --platform linux/amd64 -t us.gcr.io/castlebnb/castlebnb:latest .
docker push us.gcr.io/castlebnb/castlebnb:latest
gcloud run deploy --image=us.gcr.io/castlebnb/castlebnb:latest castlebnb
