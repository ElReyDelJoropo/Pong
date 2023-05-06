# Phaser practice app

<!--toc:start-->
- [Phaser practice app](#phaser-practice-app)
  - [Overview](#overview)
    - [Scope](#scope)
      - [Use cases](#use-cases)
      - [Out of Scope](#out-of-scope)
  - [Architecture](#architecture)
    - [Data models](#data-models)
      - [1. User](#1-user)
      - [2. Note](#2-note)
      - [3. Project](#3-project)
<!--toc:end-->

---

## Overview

Game project written in typescript using phaser as game framework. Aiming to
improve my design skills

### Scope

Im looking for this api allow users to store their notes, create projects (with permission
rules). Also i will basic CRUD operations on this entities

#### Use cases

Description

- As system user i would like to signup in the system to store all my notes
- As system user i would like to store my notes
- As system user i would like to view all notes that i've written
- As system user i would like to edit previous created notes
- As system user i would like to delete my notes
- As system user i would like to create collections of notes to store them separated

- As system administrator i would like to delete an user account, hence erasing
all their notes

#### Out of Scope

Description

- As system user i would like to join other people to my project
- As system user i would like to have both public and private repositories
- As system user i would like to move notes from one project to another

---

## Architecture

### Data models

#### 1. User

```typescript
interface User {
    name : string;
    lastname: string;
    id: string;
    email: string;
    password: string;
    projects: Project[];
    notes: Note[];
}
```

#### 2. Note

```typescript
interface Note {
    title : string;
    text: string;
    id: string;
    author: User;
    project: Project;
}
```

#### 3. Project

```typescript
interface Project {
    name: string;
    accessLevel: 'public' | 'private';
    id: string;
    author: User;
    notes: Note[];
}
```

---
