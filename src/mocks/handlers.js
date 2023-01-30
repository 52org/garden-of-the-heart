import { rest } from 'msw';

const handlers = [
  rest.post('/login', (req, res, ctx) => {
    localStorage.setItem('access-token', 'test-token-by-msw');
    return res(ctx.status(200),
    ctx.json({
      message:'로그인 성공',
      data: 'hello mocking data'
    }));
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
  rest.get('/getGarden:/uuid', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '성공',
        data: {
          name: '고구마',
          plantList : {
            letterId: '1',
            plantName: '사과',
            wateringCount: 0,
            isWatered: false,
          }
        }
      }),
    );
  }),
];

export default handlers;