"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const feedback_modal_1 = require("./feedback.modal");
const CreateFeedback = (authUserId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.user = authUserId;
    const feedback = yield feedback_modal_1.Feedback.create(payload);
    return feedback;
});
const GetAllFeedbacks = () => __awaiter(void 0, void 0, void 0, function* () {
    const feedbacks = yield feedback_modal_1.Feedback.find();
    return feedbacks;
});
exports.FeedbackService = {
    CreateFeedback,
    GetAllFeedbacks,
};
