# Mataf Nest Course

A collection of lesson projects, demos, and TypeScript exercises used to teach NestJS fundamentals.

## Repository structure

| Path | Description |
| --- | --- |
| `Lesson 3/NestFirstApp` | Introductory NestJS application with a `person` controller and CRUD-style endpoints. |
| `Demo1_Pipes/myapp` | Example project showing custom validation pipes. |
| `Demo2_Middeware/myapp` | Example project focused on Nest middleware. |
| `Demo3_ExceptionFilter/myapp` | Example project showing custom HTTP exception filters. |
| `Lesson4` | REST API examples for `user` and `student` resources. |
| `Lesson5` | Users API backed by MongoDB and Mongoose. |
| `TypeScript` | Standalone TypeScript language examples and exercises. |
| `Ex2_Solution` | Small JavaScript exercise solution files. |

## Prerequisites

- Node.js 14+
- npm
- MongoDB running locally on `mongodb://localhost:27017/usersDB` for `Lesson5`

## Working with the NestJS lesson projects

Each NestJS project in this repository is self-contained and has its own `package.json`.

### Install dependencies

Run the command inside the lesson or demo directory you want to work on:

```bash
npm install
```

### Start a project

```bash
npm run start:dev
```

### Common scripts

Most NestJS projects in this repository support:

- `npm run build`
- `npm run start`
- `npm run start:dev`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`

## Suggested learning order

1. Review the TypeScript examples in `TypeScript`.
2. Start with `Lesson 3/NestFirstApp` for the basic NestJS structure.
3. Continue with `Demo1_Pipes`, `Demo2_Middeware`, and `Demo3_ExceptionFilter`.
4. Move to `Lesson4` for REST resource organization.
5. Finish with `Lesson5` for persistence with MongoDB.

## Notes

- Folder names are intentionally kept as they appear in the course materials.
- Some lesson folders still contain the default Nest starter README; use this root README as the main entry point for the repository.
