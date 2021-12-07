'use strict';
var expect = require('chai').expect,
    inline = require('./index');

describe('inline-string', () => {
    it('does the thing', () => {
        var baz = `
            a
            .b
        `;

        var str = inline`
            foo
            .bar.${baz}
            
            .2B.9S
        `;
        
        expect(str).to.eql('foo.bar.a.b.2B.9S');
    })

    it('works when placeholder values is non-string', () => {
        var baz = 42

        var str = inline`
            foo
            .bar.${baz}
            
            .2B.9S
        `;
        
        expect(str).to.eql('foo.bar.42.2B.9S');
    })
})
