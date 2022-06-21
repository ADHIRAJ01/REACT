const PostSchema = require("../models/postsSchema");


export const getPost = async(req,res) => {
    // res.send("CONTROLLER POST");
    try {
        const postmsg = await PostSchema.find();
        
        // console.log(postmsg);

        res.status(200).json(postmsg);
    } catch (err) {
        res.status(400).json({message : err.message });
    }
}
export const createPost = async (req,res) => {
    // res.send("POST CREATION");
    const post = req.body;

    const newPost = new PostMessage(post);
    
    try {
    
        await newPost.save();
        res.status(201).json(newPost);

    } catch(err) {
        res.status(400).json({message : err.message});
    }
}