import Daemon from "../daemon";

test('Правильно расчитывается атака без эффекта дурмана', () => {
    const daemon = new Daemon('Alex');
    daemon.attack = 100;
    daemon.distance = 2
    expect(daemon.getAttack()).toBe(90);
})

test('Правильно расчитывается атака c эффектом дурмана', () => {
    const daemon = new Daemon('Alex');
    daemon.attack = 100;
    daemon.distance = 2
    daemon._stoned = true;
    expect(daemon.getAttack()).toBe(85);
})