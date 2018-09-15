import {async} from '@angular/core/testing';
import {ReversePipe} from './reverse.pipe';


it(`should reverse the string 'hello'`, async(() => {
  const reversePipe = new ReversePipe();
  expect(reversePipe.transform('hello')).toEqual('olleh');
}));
