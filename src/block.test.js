import Block from "./blockchain/block"

describe('Block', () => {

    let timestamp; 
    let previousBlock;
    let hash; 
    let data;
    
    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data ='t3st-d4t4';
        hash = 'h4s4';
    });

    it('create an isntance with parameters', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });

    it ('use static mine()', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('use static hash()',() => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hashOutput = '0446c8995cc2f52476b2d77413d5df4b115f356b14c6f92b62d48b38dd01b8ec';
        expect(hash).toEqual(hashOutput);
    });

    it('use toString()', () => {
        const block = Block.mine(previousBlock, data); 
        
        expect(typeof block.toString()).toEqual('string');
    });
    
});