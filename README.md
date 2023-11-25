# Monorepo
Made by https://www.tomray.dev/nestjs-nextjs-trpc#monorepo-config-updates-and-dx-tips
# Documentation
TODO:
- [x] OpenAPI integraion
- [x] API integration
    - [x] Front
    - [x] Back
- [ ] Turbo test
- [x] Tsconfig fix
- [ ] Dotenv
- [ ] Deploy
- [] JSON query params for front and back https://ts-rest.com/docs/next#json-query-parameters 
- [ ] Update all packages
- [ ] refactor Nest
- [ ] refactor Next to FSD filesystem
- [ ] Clerk integrations
- [ ] Split dotenv to apps?
- [ ] Github actions CI/CD


# What's included
- Turbo + PNPM monorepo
- Apps
    - Docs
        - Nextra
        - Shadcn/UI UI components
    - server
        - NestJS
        - DrizzleORM with MySQL2 and Planetscale
        - SwaggerUI with OpenAPI integration
        - REST-compatible API with TS-Rest
        - Clerk-based Auth
    - API
        - TS-Rest
        - OpenAPI integration
    - Web
        - NextJS
        - TailwindCSS
        - UI components from Shadcn/UI
        - API from TS-REST
        - FSD Filesystem
        - Clerk-based Auth
- Packages
    - Api
    - UI
    - DB
- Tooling
    - Eslint
    - Typescript
    - TailwindCSS
    - Prettier
- Others
    - ASDF NodeJS
    - Easy deploy to Railways
    - Github Actions CI/CD