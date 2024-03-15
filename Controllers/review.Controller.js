const Review = require('../Models/ReviewSchema');

const Addreviews = async(req,res) => {

    try{
        const {UserID, rating, comment, productID} = req.body;

        const review = await Review.create({
            user: UserID,
            rating,
            comment,    
            product: productID
        })
    
        if(review){
            res.status(200).json({message: "Review added successfully"})
        }
        else{
            res.status(400).json({message: "Review not added"})
        }
    }
    catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
}

const GetReviews = async(req,res) => {
    try{
        const reviews = await Review.find({})
        if(reviews){
            res.status(200).json({reviews})
        }
        else{
            res.status(400).json({message: "Reviews not found"})
        }
    }
    catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
}

const DeleteReviews = async(req,res) => {
    try{
        const {reviewId,UserID} = req.body;
        const deleted = await Review.findByIdAndDelete(reviewId,UserID);
        if(deleted){
            res.status(200).json({message: "Review deleted successfully"})
        }
        else{
            res.status(400).json({message: "Review not found"})
        }
    }catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
}

const EditReviews = async(req,res)=>{
    try{
        const {UserID,reviewId, rating, comment} = req.body
       const updatedreview = await Review.findByIdAndUpdate(reviewId,UserID,{
           rating,
           comment
       })
       if(updatedreview){
           res.status(200).json({message: "Review updated successfully"})
       }
       else{
           res.status(400).json({message: "Review not found"})
       }

    }catch(error){
        res.status(500).json({message: "Something went wrong"})
    }

}

module.exports = {
    Addreviews,
    GetReviews,
    DeleteReviews,
    EditReviews
}