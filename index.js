// function scuberGreetingForFeet(totalFeet) {
//   if (totalFeet <= 400) {
//     return 'This one is on me!';
//   } else if (totalFeet > 2500) {
//     return 'No can do.';
//   } else {
//     return 'I will gladly take your thirty bucks.';
//   }
// }

function scuberGreetingForFeet(totalFeet) {
  if (totalFeet <= 400) {
    return 'This one is on me!';
  } else if (totalFeet > 2500) {
    return 'No can do.';
  } else if (totalFeet > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default: 'Bye.'

  }
}





// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });

//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });

//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });
// });