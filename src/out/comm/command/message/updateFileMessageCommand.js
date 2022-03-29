"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileMessageEventCommand = exports.UpdateFileMessageRequestCommand = void 0;
const vault_1 = require("../../../vault");
const types_1 = require("../../../model/message/types");
const fileMessage_1 = require("../../../model/message/fileMessage");
const websocketEventCommand_1 = require("../../../core/command/websocket/websocketEventCommand");
const websocketRequestCommand_1 = require("../../../core/command/websocket/websocketRequestCommand");
const deundefined_1 = require("../../../utils/deundefined");
const utils_1 = require("../utils");
class UpdateFileMessageRequestCommand extends websocketRequestCommand_1.default {
    constructor(params) {
        super({
            code: 'FEDI',
            ackRequired: true,
            payload: (0, deundefined_1.deundefined)({
                channel_url: params.channelUrl,
                msg_id: params.messageId,
                data: params.data,
                custom_type: params.customType,
                metaarray: params.metaArrayParams,
                mention_type: params.mentionType,
                mentioned_user_ids: (params.mentionType === types_1.MentionType.USERS) ? params.mentionedUserIds : [],
                apple_critical_alert_options: params.appleCriticalAlertOptions,
            }),
        });
    }
}
exports.UpdateFileMessageRequestCommand = UpdateFileMessageRequestCommand;
class UpdateFileMessageEventCommand extends websocketEventCommand_1.default {
    constructor(_iid, _, payload) {
        var _a, _b, _c, _d;
        super(_iid, 'FEDI', payload);
        this.message = new fileMessage_1.default(_iid, payload);
        const { sdkState } = vault_1.default.of(_iid);
        this.mentionCountChange = (0, utils_1.calculateMentionCountChange)({
            mentionType: (_b = (_a = payload.old_values) === null || _a === void 0 ? void 0 : _a.mention_type) !== null && _b !== void 0 ? _b : null,
            mentionedUserIds: (_d = (_c = payload.old_values) === null || _c === void 0 ? void 0 : _c.mentioned_user_ids) !== null && _d !== void 0 ? _d : [],
        }, {
            mentionType: this.message.mentionType,
            mentionedUserIds: this.message.mentionedUsers.map((user) => user.userId),
        }, sdkState.userId);
    }
}
exports.UpdateFileMessageEventCommand = UpdateFileMessageEventCommand;
//# sourceMappingURL=updateFileMessageCommand.js.map