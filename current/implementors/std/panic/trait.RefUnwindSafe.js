(function() {var implementors = {};
implementors["serenity"] = [{"text":"impl RefUnwindSafe for OpCode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BotApplication","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PartialCurrentApplicationInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CurrentApplicationInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Team","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TeamMember","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MembershipState","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Attachment","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelCategory","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; RefUnwindSafe for MessagesIter&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Embed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmbedAuthor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmbedField","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmbedFooter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmbedImage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmbedProvider","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmbedThumbnail","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmbedVideo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildChannel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageReaction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageActivityKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageApplication","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageActivity","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageReference","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelMention","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PrivateChannel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Reaction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReactionType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReactionConversionError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NeverFails","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sticker","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StickerFormatType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Channel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PermissionOverwrite","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PermissionOverwriteType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelCreateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelDeleteEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelPinsUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildBanAddEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildBanRemoveEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildCreateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildDeleteEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildEmojisUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildIntegrationsUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildMemberAddEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildMemberRemoveEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildMemberUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildMembersChunkEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildRoleCreateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildRoleDeleteEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildRoleUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InviteCreateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InviteDeleteEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildUnavailableEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageCreateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageDeleteBulkEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageDeleteEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PresenceUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PresencesReplaceEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReactionAddEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReactionRemoveEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReactionRemoveAllEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadyEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ResumedEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypingStartEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnknownEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UserUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VoiceServerUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VoiceStateUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WebhookUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InteractionCreateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GatewayEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EventType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BotGateway","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Activity","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivityAssets","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivityFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivityParty","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivitySecrets","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivityEmoji","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivityType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Gateway","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ClientStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Presence","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ready","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionStartLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivityTimestamps","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Target","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Action","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionChannel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionChannelOverwrite","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionMember","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionRole","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionInvite","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionWebhook","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionEmoji","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActionIntegration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Change","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AuditLogs","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AuditLogEntry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Options","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Emoji","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; RefUnwindSafe for MembersIter&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Integration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IntegrationAccount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Member","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PartialMember","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PartialGuild","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PremiumTier","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Role","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ban","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Guild","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildContainer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildEmbed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildPrune","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildUnavailable","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DefaultMessageNotificationLevel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExplicitContentFilter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MfaLevel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Region","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VerificationLevel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmojiId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IntegrationId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RoleId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UserId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WebhookId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AuditLogEntryId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AttachmentId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StickerId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StickerPackId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InteractionId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CommandId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Interaction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InteractionType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationCommandInteractionData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationCommandInteractionDataOption","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationCommandOption","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationCommandOptionType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationCommandOptionChoice","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InteractionResponseType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InteractionApplicationCommandCallbackDataFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Invite","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InviteUser","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InviteChannel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InviteGuild","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RichInvite","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Mention","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for UserParseError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UserIdParseError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RoleIdParseError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelIdParseError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChannelParseError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RoleParseError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmojiIdentifier","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AffectedComponent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Incident","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IncidentUpdate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IncidentStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Maintenance","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Permissions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CurrentUser","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DefaultAvatar","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OnlineStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for User","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VoiceRegion","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VoiceState","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Webhook","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Context","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateChannel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateEmbed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateEmbedAuthor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateEmbedFooter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Timestamp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateInteractionOption","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateInteraction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ParseValue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateAllowedMentions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateInteractionResponse","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateInteractionResponseData","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for CreateInteractionResponseFollowup&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateInvite","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for CreateMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EditChannel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EditGuild","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EditInteractionResponse","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EditMember","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EditMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EditProfile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EditRole","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for ExecuteWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetMessages","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Settings","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Cache","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShardStageUpdateEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GatewayIntents","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardManager","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for ShardManagerOptions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardManagerMonitor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShardManagerError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardMessenger","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardQueuer","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardRunner","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardRunnerOptions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChunkGuildFilter","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardRunnerMessage","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardClientMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShardManagerMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShardQueuerMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShardId","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ShardRunnerInfo","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Extras","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for ClientBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Client","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MessageFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for MessageCollectorBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for CollectReply&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MessageCollector","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReactionAction","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ReactionFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for ReactionCollectorBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for CollectReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ReactionCollector","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupCommandsPair","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SuggestedCommandName","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Suggestions","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for CustomisedHelpData&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; RefUnwindSafe for Error&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Delimiter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Args","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; RefUnwindSafe for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for RawArguments&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WithWhiteSpace","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Configuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RateLimitInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RateLimitAction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RevertBucket","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LimitedFor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BucketBuilder","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Reason","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Check","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OnlyIn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CommandOptions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Command","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HelpCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HelpBehaviour","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HelpOptions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupOptions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CommandGroup","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DispatchError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for StandardFramework","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Shard","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConnectionStage","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for InterMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShardAction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReconnectType","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Http","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DiscordJsonError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ErrorResponse","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Ratelimiter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ratelimit","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for RatelimitedRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for RequestBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Request&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Route","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for RouteInfo&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Typing","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LightMethod","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for AttachmentType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GuildPagination","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Colour","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CustomMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageBuilder","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ContentModifier","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Content","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ContentSafeOptions","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for CacheAndHttp","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()