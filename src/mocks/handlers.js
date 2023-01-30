import { rest } from 'msw';

const todos = ["먹기", "자기", "놀기", '코딩'];

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
  rest.get('/getGarden/:uuid', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '성공',
        data: {
          name: '고구마',
          plantList: [
            { letterId: '123', plantName: '토마토1', wateringCount: 1, isWatered: false },
            { letterId: '456', plantName: '해바라기2', wateringCount: 1, isWatered: true },
          ],
        }
      }),
    );
  }),
  rest.get('/api2/todos', (req, res, ctx) => {
    return res(
      ctx.status(111), ctx.json(todos)
    )
  })
];

export default handlers;