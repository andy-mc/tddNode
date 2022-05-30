it('will check the matchers and pass', () => {
  const user = {
    age: 23,
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot({
    age: 23,
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});