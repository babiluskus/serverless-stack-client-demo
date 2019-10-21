export default {
  STRIPE_KEY: "pk_test_zvEFUvYVfwhSEmaMLo0Y5EcM00w8vsFtfS",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-north-1",
    BUCKET: "demo-note"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://vgjz5n9tah.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_cbz2qwd0E",
    APP_CLIENT_ID: "pjm9ujvqbcgfulo0hpv13dvob",
    IDENTITY_POOL_ID: "eu-central-1:2cb43f35-c0c1-4ccd-b269-0751da840a12"
  }
};