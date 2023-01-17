import HelloWorld from '../utils/HelloWorld.js';

it ("Should return 'Hello Owen'", ()=>{

    const result = HelloWorld();

    expect(result).toBe("Hello Owen");
});