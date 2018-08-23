const Review = require('../models/review.model');

class reviewService {
    read() {
        return Review.find().exec();
    }

    write(data) {
        return Review.create(data)
    }

    update(id, data) {
        Review.findById(id, function (err, review) {
            if (review) {
                for (var key in data) {
                    review[key] = data[key];
                }
                return Review.findByIdAndUpdate(id, review).exec();
            }
        });
    }

    deleteReview(id) {
        return Review.findByIdAndRemove(id).exec();
    }

}

module.exports = new reviewService();