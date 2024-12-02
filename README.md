This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Additional commands:

run prettier format: ```npm run format```,
run eslint and prettier checks: ```npm run lint```

# Vehicle Finder app Overview
![image](https://github.com/user-attachments/assets/0953f10a-c484-4cf2-86e3-5e085440ce62)

To use the application, the user needs to select a model of the vehicle and the year of its production. After choosing the model and year the user is allowed to Search for the results.

![image](https://github.com/user-attachments/assets/cf26ac8a-5897-44e8-8bc0-ceb00f8286f3)

The result page contains detailed information about vehicles produced under the selected year and model.

https://github.com/user-attachments/assets/de2aa37b-b759-4e8c-b11f-fb842885c4e9

## Architecture Overview
For this project, I have used the following architecture:

```
src
├── app                               //Entry points into screens, routing. Composition of features modules, to which all work is delegated. These are smart components and page services
|    └── page.tsx
|    └── layout.ts
|    └── [makeId]
|           └── [year]
|                  └── page.tsx       
|                  └── layout.tsx
├── entities                          //Contains only interfaces and types that are related to a certain entity
│   └── models
│       └── vehicle
│           └── types.ts              
├── features                          //One feature = one use-case, the layer where all business logic is held
│   └── vehicle
│       └── select-vehicle.tsx
├── services                          //Data layer, state, calculations, logic. Services can be different at different levels, but their main task is to work with data, they do not know about ui at all
│   └── vehicle
│       ├── index.ts
│       └── vehicle-service-api.ts
├── shared                           //Shared code that has no domain knowledge. External libraries, design system, utilities. Easily portable to another project
│   └── ui
│       ├── button.tsx
│       ├── loading.tsx
│       └── select.tsx       

```

### usecases
![image](https://github.com/user-attachments/assets/a9842da4-7e4b-4040-8115-3dd41b68590e)




