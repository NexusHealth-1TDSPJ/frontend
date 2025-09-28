import { useForm } from "react-hook-form";
import { useState } from "react";
import "./contato.css";

document.title = "Contato";

type FormInputs = {
  nome: string;
  sobrenome: string;
  email: string;
  cep: string;
  internet: string;
  microfone: string;
  camera: string;
  ambienteSilencioso: string;
};

export default function Contato() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log("Dados enviados:", data);
    setSuccess(true);
    reset();
  };

  return (
    <div className="container-contato">
      <h1 className="titulo-contato">Cadastro de Contato</h1>

      {success && (
        <div className="mensagem-sucesso">
          Formulário enviado com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="formulario-contato">
        <div>
          <input
            placeholder="Nome"
            {...register("nome", { required: "Informe o nome" })}
            className={`campo-input ${errors.nome ? "campo-erro" : "campo-normal"}`}
          />
          {errors.nome && <p className="texto-erro">{errors.nome.message}</p>}
        </div>

        <div>
          <input
            placeholder="Sobrenome"
            {...register("sobrenome", { required: "Informe o sobrenome" })}
            className={`campo-input ${errors.sobrenome ? "campo-erro" : "campo-normal"}`}
          />
          {errors.sobrenome && <p className="texto-erro">{errors.sobrenome.message}</p>}
        </div>

        <div>
          <input
            placeholder="Email"
            {...register("email", {
              required: "Informe o email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido"
              }
            })}
            className={`campo-input ${errors.email ? "campo-erro" : "campo-normal"}`}
          />
          {errors.email && <p className="texto-erro">{errors.email.message}</p>}
        </div>

        <div>
          <input
            placeholder="CEP"
            {...register("cep", {
              required: "Informe o CEP",
              pattern: {
                value: /^[0-9]{5}-?[0-9]{3}$/,
                message: "CEP inválido"
              }
            })}
            className={`campo-input ${errors.cep ? "campo-erro" : "campo-normal"}`}
          />
          {errors.cep && <p className="texto-erro">{errors.cep.message}</p>}
        </div>

        <div className="secao-teleconsulta">
          <h2 className="titulo-secao">Condições para Teleconsulta</h2>

          <div className="mb-2">
            <p className="pergunta-radio">Você tem acesso à internet?</p>
            <div className="opcoes-radio">
              <label className="label-radio">
                <input
                  type="radio"
                  value="Sim"
                  {...register("internet", { required: "Escolha uma opção" })}
                />
                Sim
              </label>
              <label className="label-radio">
                <input
                  type="radio"
                  value="Não"
                  {...register("internet", { required: "Escolha uma opção" })}
                />
                Não
              </label>
            </div>
            {errors.internet && <p className="texto-erro">{errors.internet.message}</p>}
          </div>

          <div className="mb-2">
            <p className="pergunta-radio">Você tem microfone disponível?</p>
            <div className="opcoes-radio">
              <label className="label-radio">
                <input
                  type="radio"
                  value="Sim"
                  {...register("microfone", { required: "Escolha uma opção" })}
                />
                Sim
              </label>
              <label className="label-radio">
                <input
                  type="radio"
                  value="Não"
                  {...register("microfone", { required: "Escolha uma opção" })}
                />
                Não
              </label>
            </div>
            {errors.microfone && <p className="texto-erro">{errors.microfone.message}</p>}
          </div>

          <div className="mb-2">
            <p className="pergunta-radio">Você tem câmera disponível?</p>
            <div className="opcoes-radio">
              <label className="label-radio">
                <input
                  type="radio"
                  value="Sim"
                  {...register("camera", { required: "Escolha uma opção" })}
                />
                Sim
              </label>
              <label className="label-radio">
                <input
                  type="radio"
                  value="Não"
                  {...register("camera", { required: "Escolha uma opção" })}
                />
                Não
              </label>
            </div>
            {errors.camera && <p className="texto-erro">{errors.camera.message}</p>}
          </div>

          <div className="mb-2">
            <p className="pergunta-radio">Você tem ambiente silencioso para consulta?</p>
            <div className="opcoes-radio">
              <label className="label-radio">
                <input
                  type="radio"
                  value="Sim"
                  {...register("ambienteSilencioso", { required: "Escolha uma opção" })}
                />
                Sim
              </label>
              <label className="label-radio">
                <input
                  type="radio"
                  value="Não"
                  {...register("ambienteSilencioso", { required: "Escolha uma opção" })}
                />
                Não
              </label>
            </div>
            {errors.ambienteSilencioso && <p className="texto-erro">{errors.ambienteSilencioso.message}</p>}
          </div>
        </div>

        <button type="submit" className="botao-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
}
