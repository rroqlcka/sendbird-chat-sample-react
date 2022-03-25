"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnblockUserResponseCommand = exports.UnblockUserRequestCommand = void 0;
const apiRequestCommand_1 = require("../../../core/command/api/apiRequestCommand");
const apiResponseCommand_1 = require("../../../core/command/api/apiResponseCommand");
const const_1 = require("../const");
class UnblockUserRequestCommand extends apiRequestCommand_1.default {
    constructor({ userId, unblockedUserId }) {
        super();
        this.method = apiRequestCommand_1.APIRequestMethod.DELETE;
        this.path = `${const_1.API_PATH_USERS}/${encodeURIComponent(userId)}/block/${encodeURIComponent(unblockedUserId)}`;
    }
}
exports.UnblockUserRequestCommand = UnblockUserRequestCommand;
class UnblockUserResponseCommand extends apiResponseCommand_1.default {
}
exports.UnblockUserResponseCommand = UnblockUserResponseCommand;
//# sourceMappingURL=unblockUserCommand.js.map