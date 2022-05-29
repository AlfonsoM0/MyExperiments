/* 
  Una clínica tiene horarios de atención. Y días de atención.

  Un turno tiene un horario de inicio y final. Para un día determinado.

  1) Validar un turno para que encaje dentro del horario de la clínica.
  2) Validar un turno para que no se solape con otros.
*/

const officeHours = [
  [], // i = 0 = domingo
  [
    // lunes, de 8:30hs a 12:45hs, y de 17 a 21hs
    { min: 8.5, max: 12.75 },
    { min: 17, max: 21 },
  ],
  [
    { min: 8.5, max: 12.75 },
    { min: 17, max: 21 },
  ],
  [
    { min: 8.5, max: 12.75 },
    { min: 17, max: 21 },
  ],
  [
    { min: 8.5, max: 12.75 },
    { min: 17, max: 21 },
  ],
  [
    { min: 8.5, max: 12.75 },
    { min: 17, max: 21 },
  ],
  [], // i = 6 = sábado
];

const turns = [
  {
    date: '2022-05-30',
    time: 9.5,
    duration: 1,
  },
  {
    date: '2022-05-31',
    time: 10.5,
    duration: 1,
  },
  {
    date: '2022-05-30',
    time: 11.5,
    duration: 1,
  },
  {
    date: '2022-06-30',
    time: 11.5,
    duration: 1,
  },
];

const turn = {
  date: '2022-05-30',
  time: 8.5,
  duration: 1,
};

//|> VALIDATE TURN INTO OFFICE-HOURS
function validateTurnInOfficeHours(turn, officeHours) {
  const turnDay = new Date(turn.date).getUTCDay();
  const officeDay = officeHours[turnDay];
  const turnMin = turn.time;
  const turnMax = turn.time + turn.duration;

  for (let i = 0; i < officeDay.length; i++) {
    if (turnMin >= officeDay[i].min && turnMax <= officeDay[i].max) return true;
  }

  return false;
}
console.log(validateTurnInOfficeHours(turn, officeHours));

//|> VALIDATE TURN BETWEEN TURNS IN THE SAME DAY
function validateTurnBetweenTurnsInADAy(turn, turns) {
  for (let i = 0; i < turns.length; i++) {
    if (
      (turn.time >= turns[i].time ||
        turn.time + turn.duration > turns[i].time) &&
      turn.time < turns[i].time + turns[i].duration
    )
      return false;
  }

  return true;
}
console.log(validateTurnBetweenTurnsInADAy(turn, turns));

//|> VALIDATE TURN
function validateTurn(turn, turns, officeHours) {
  turns = turns.filter(turnX => turnX.date === turn.date);

  if (!validateTurnInOfficeHours(turn, officeHours)) return false;
  if (!validateTurnBetweenTurnsInADAy(turn, officeHours)) return false;

  return true;
}
console.log(validateTurn(turn, turns, officeHours));
