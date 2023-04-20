// SPDX-License-Identifier: MIT
pragma solidity >0.4.1;

contract SocialNetwork {
    string public name;
    mapping (uint => Post) public Posts;
    uint public Postid = 0;


    struct Post {
        uint _id;
        string content;
        uint tip;
        address author;
    }
    event postcreated(
        uint _id,
        string content,
        uint tip,
        address author
    );

    constructor() public{
        name="Dapp University is so cool";
    }
    function createPost(string memory _content) public{
        require(bytes(_content).length>0);
        Postid++;
        Posts[Postid]=Post(Postid,_content,0,msg.sender);
        emit postcreated(Postid,_content,0,msg.sender);
    }
     
    
}

