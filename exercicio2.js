var Livro = function(nome, editora, autor){
	
	var nome = nome;
	var editora = editora;
	var autor = autor;

	var capitulos = [];

	this.getNome = () => nome;
	this.getEditora = () => editora;
	this.getAutor = () => autor;

	this.getNumCapitulos = () => capitulos.length;

	this.getNumPaginasLivro = () => capitulos.reduce((total, atual) => total + atual.getNumPaginas(), 0);

	this.addCapitulo = (capitulo) => capitulos.push(capitulo);
}

var Capitulo = function(titulo, numPaginas){

	var titulo = titulo;
	var numPaginas = numPaginas;

	this.getTitulo = () => titulo;
	this.getNumPaginas = () => numPaginas;
}

var a = new Capitulo("ah", 40)
var b = new Capitulo("aha", 30)
var c = new Capitulo("b", 20)
var livro = new Livro("nome", "editora", "autor")

livro.addCapitulo(a)
livro.addCapitulo(b)
livro.addCapitulo(c)

livro.getNumPaginasLivro()