var Livro = function(nome, editora, autor){
	Capitulo.call(this, nome, editora, autor);
	
	var nome = nome;
	var editora = editora;
	var autor = autor;

	var capitulos = [];

	var totalDePaginasPorCapitulo = capitulos.map( (valor) => valor*capitulo.numPaginas);

	this.getNome = () => nome;
	this.getEditora = () => editora;
	this.getAutor = () => autor;

	this.getNumCapitulos = () => capitulos.length + 1;

	this.getNumPaginasLivro = () => capitulos.reduce((total, atual) => total + atual, 0);

	this.getCapitulo = (numCapitulo) => capitulos[numCapitulo];

	 this.addCapitulo = (capitulo) => capitulos.push(capitulo);
}

var Capitulo = function(titulo, numPaginas){

	var titulo = titulo;
	var numPaginas = numPaginas;
}