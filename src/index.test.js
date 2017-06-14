import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

// Just Some Examples

describe('First Test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        // can pass in an array of object
        // unless fetch would need isomorphic functionality
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            // just first one
            expect(h1.innerHTML).to.equal('Connected');
            done();
            window.close();
        });
    });
});
