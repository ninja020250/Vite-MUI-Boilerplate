#!/bin/bash

# Output the current Vercel environment
echo "Vercel Environment: $VERCEL_ENV"
echo "Git Commit Ref: $VERCEL_GIT_COMMIT_REF"

# Determine the build command based on the Vercel environment
if [ "$VERCEL_ENV" == "production" ]; then
  echo "Running production build..."
  npm run build:prod
elif [ "$VERCEL_ENV" == "preview" ] && [ "$VERCEL_GIT_COMMIT_REF" == "staging" ]; then
  echo "Running staging preview build..."
  npm run build:staging
elif [ "$VERCEL_ENV" == "preview" ] && [ "$VERCEL_GIT_COMMIT_REF" == "develop" ]; then
  echo "Running develop preview build..."
  npm run build:dev
else
  echo "Running default preview build..."
  npm run build:dev
fi
