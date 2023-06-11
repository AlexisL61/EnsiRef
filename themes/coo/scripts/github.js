hexo.extend.helper.register("request_cheatsheet", function () {
    return `https://github.com/AlexisL61/EnsiRef/issues/new?title=Cheatsheet+request%3A+&labels=request&template=cheatsheet-request.md&assignee=Fechin`;
});

hexo.extend.helper.register("contributing", function () {
    return `https://github.com/AlexisL61/EnsiRef`;
});


hexo.extend.helper.register("edit_page", function () {
    let postPage = this.page['layout'] === 'post';
    let url = "https://github.com/AlexisL61/EnsiRef";
    if (postPage) {
        url += `/blob/main/source/_posts/${this.page.slug}.md`;
    }
    return url;
});