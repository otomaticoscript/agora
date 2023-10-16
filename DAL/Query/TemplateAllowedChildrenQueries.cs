namespace Agora.DAL.Query
{
    class TemplateAllowedChildrenQueries
    {
        public const string GetTemplateAllowedChildren = "SELECT * FROM template_allowed_children WHERE IdTemplateParent = @IdTemplateParent;";
        public const string GetAllowedChildren = "SELECT DISTINCT * FROM template_allowed_children WHERE IdTemplateParent in @IdParents;";
        public const string InsertTemplateAllowedChildren = @"INSERT INTO template_allowed_children (IdTemplate, IdTemplateParent, MaxAllowed) VALUES (@IdTemplate, @IdTemplateParent, @MaxAllowed);";
        public const string UpdateTemplateAllowedChildren = @"UPDATE template_allowed_children SET MaxAllowed = @MaxAllowed WHERE IdTemplate = @IdTemplate AND IdTemplateParent= @IdTemplateParent;";
        public const string DeleteTemplateAllowedChildren = @"DELETE FROM template_allowed_children WHERE IdTemplate = @IdTemplate AND IdTemplateParent= @IdTemplateParent;";
        public const string DeleteChildrenByIdTemplate = @"DELETE FROM template_allowed_children WHERE IdTemplateParent= @IdTemplateParent;";
    }
}