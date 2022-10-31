// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),

  // Handles a GET /user request
  rest.get('/user', (req, res, ctx)=>{
    return res(
      ctx.status(200),
      ctx.json({
        username: 'user01'
      })
    )
  }),

  rest.get('https://my.api/api/v1/pets', (req, res, ctx)=>{
    return res(
      ctx.status(200),
      ctx.json([
        { 'name': 'Fluffy' },
        { 'name': 'Rex' },
        { 'name': 'Rover' },
      ])
    )
  }),

  rest.get('https://my.api/api/v1000/pets', (req, res, ctx)=>{
    return res(
      ctx.status(404),
    )
  }),

  rest.post('https://my.api/api/v1/pets/new', async (req, res, ctx)=>{
    const body = await req.json();
    return res(
      ctx.status(201),
      ctx.json(
        body
      )
    )
  }),

  rest.put('https://my.api/api/v1/pets/1', async (req, res, ctx)=>{
    const body = await req.json();
    return res(
      ctx.status(200),
      ctx.json(
        body
      )
    )
  }),

  rest.delete('https://my.api/api/v1/pets/1', (req, res, ctx)=>{
    return res(
      ctx.status(204),
    )
  }),

]