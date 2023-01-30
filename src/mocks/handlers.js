import { rest } from 'msw';

const handlers = [
  rest.post('/login', (req, res, ctx) => {
    localStorage.setItem('access-token', 'test-token-by-msw');
    return res(ctx.status(200));
  }),
  rest.get('/messagebox', (req, res, ctx) => {
    const isAuthenticated = localStorage.getItem('access-token');
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: 'user_john',
      }),
    );
  }),
];

export default handlers;