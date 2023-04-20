const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

 contract('SocialNetwork',([deployer,author,tipper])=>{
    let socialnetwork
    before(async () => {
      socialnetwork = await SocialNetwork.deployed()
    })
  


   

    describe('deployment',async()=>{
       it('deploys successfully',async()=>{
         const address = await socialnetwork.address
         console.log(address)
         assert.notEqual(address, 0x0)
         assert.notEqual(address, '')
         assert.notEqual(address, null)
         assert.notEqual(address, undefined)

       })
       it('has a name',async()=>{
         const name = await socialnetwork.name()
         assert.equal(name, 'Dapp University is so cool')
       })
    })
    describe('posts',async()=>{
      let result,postCount;
      it('Create post',async()=>{
       result= await socialnetwork.createPost('this is the first one',{from: author});
       postCount = await socialnetwork.Postid();
       console.log(result);
       const thisevent=result.logs[0].args
      
       assert.equal(thisevent._id.toNumber(), postCount.toNumber(), 'id is correct')
       assert.equal(thisevent.content, 'this is the first one', 'content is correct')
       assert.equal(thisevent.tip, '0', 'tip amount is correct')
       assert.equal(thisevent.author, author, 'author is correct')

       await socialNetwork.createPost('', { from: author }).should.be.rejected;
      })
    })



   })    
