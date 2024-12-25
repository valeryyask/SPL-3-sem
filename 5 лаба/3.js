function* moveObjectGenerator() 
{
    let currentX = 0;
    let currentY = 0;

    while(true)
    {
        const UserDirection = yield { x: currentX, y: currentY};

        switch(UserDirection)
        {
            case "left":
                currentX = currentX - 10;
                currentY = currentY + 10;
                break;
            case "right":
                currentX = currentX + 10;
                currentY = currentY - 10;
                break;
            case "up":
                currentY = currentY + 10;
                break;
            case "down":
                currentY = currentY - 10;
                break;
        }

        console.log(`Новые координаты: x:${currentX}, y:${currentY}`);    }
}

const objectMover = moveObjectGenerator();
objectMover.next();

for (let i = 0; i < 10; i++)
{
    const UserCommand = prompt("Введите команду (left/right/up/down): ");
    objectMover.next(UserCommand);
}