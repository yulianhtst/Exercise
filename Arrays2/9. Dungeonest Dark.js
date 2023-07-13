function dungeonestDark(rooms) {
    let health = 100;
    let coins = 0

    rooms
        .join('')
        .split('|')
        .forEach((x, i) => {
            let room = x.split(' ');
            if (room[0] == 'potion') {
                let hp = Number(room[1])

                if (health + hp > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100
                } else {
                    health += hp
                    console.log(`You healed for ${hp} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
            } else if (room[0] == 'chest') {
                console.log(`You found ${room[1]} coins.`);
                coins += Number(room[1])
            } else {
                let dmg = room[1]

                health -= dmg
                if (health <= 0) {
                    console.log(console.log(`You died! Killed by ${room[0]}.`));
                    console.log(`Best room: ${i + 1}`);
                } else {
                    console.log(`You slayed ${room[0]}.`);
                }
            }
        })
    if (!health <= 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100 |boss 70|chest 1000"])
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])